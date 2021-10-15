package com.infy.util;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.infy.repository.CustomerRepository;
import com.infy.service.CustomerServiceImpl;

@Configuration

public class SpringConfiguration {

	@Bean // Setter Injection
	public CustomerRepository customerRepository() {
		CustomerRepository customerRepository = new CustomerRepository();
		return customerRepository;
	}

	@Bean // Setter Injection
	public CustomerServiceImpl customerService() {
		CustomerServiceImpl customerService = new CustomerServiceImpl();
		customerService.setCount(10);
		customerService.setRepository(customerRepository());
		return customerService;
	}
}
