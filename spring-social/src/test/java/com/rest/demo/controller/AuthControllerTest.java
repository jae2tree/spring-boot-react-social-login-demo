package com.rest.demo.controller;

import com.rest.demo.DemoApplication;
import com.rest.demo.payload.LoginReqest;
import com.rest.demo.payload.SignUpRequest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Mono;

import static org.mockito.BDDMockito.given;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AuthControllerTest {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Test
    void testExample(@Autowired WebTestClient rest) throws Exception {
        rest.get().uri("/test/get")
                .exchange()
                .expectStatus().isOk()
                .expectBody(String.class).isEqualTo("Honda Civic");
    }

    @Test
    void joinTest(@Autowired WebTestClient rest) throws Exception {
        SignUpRequest req = new SignUpRequest();
        req.setEmail("jae2tree@gmail.com");
        req.setName("JaeMyung");
        req.setPassword("123123");

        rest.post().uri("/auth/signup")
                .body(Mono.just(req), SignUpRequest.class)
                .exchange()
                .expectStatus().is2xxSuccessful();
    }

    @Test
    void loginTest(@Autowired WebTestClient rest) throws Exception {
        LoginReqest req = new LoginReqest();
        req.setEmail("jae2tree@gmail.com");
        req.setPassword("123123");

        rest.post().uri("/auth/login")
                .body(Mono.just(req), LoginReqest.class)
                .exchange()
                .expectStatus().isOk();
    }
}
