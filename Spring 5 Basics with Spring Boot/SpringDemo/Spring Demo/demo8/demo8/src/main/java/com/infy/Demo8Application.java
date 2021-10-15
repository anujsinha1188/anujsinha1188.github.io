package com.infy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.AbstractApplicationContext;
import com.infy.service.CustomerServiceImpl;

@SpringBootApplication
public class Demo8Application {

	public static void main(String[] args) {

		CustomerServiceImpl service = null;
		AbstractApplicationContext context = (AbstractApplicationContext) SpringApplication.run(Demo8Application.class,
				args);
		
		service = (CustomerServiceImpl) context.getBean("customerService");

		service.deleteCustomer(1151212222l);
		// service.deleteCustomer(9951212222l);
	}

}
