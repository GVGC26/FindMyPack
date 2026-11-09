package com.findmypack.health;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HealthController {
    private final JdbcTemplate jdbcTemplate;

    public HealthController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping("/health")
    public HealthResponse health() {
        jdbcTemplate.queryForObject("SELECT 1", Integer.class);
        return new HealthResponse("UP", "UP");
    }

    public record HealthResponse(String status, String database) {
    }
}
