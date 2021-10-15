package com.infy.util;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.infy.service.CustomerServiceImpl;

@Configuration

public class SpringConfiguration {

	@Bean(name = "customerService")
	public CustomerServiceImpl customerServiceImpl() {

		return new CustomerServiceImpl();
	}
}
