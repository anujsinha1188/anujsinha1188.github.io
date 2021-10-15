package com.infy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.AbstractApplicationContext;

import com.infy.service.CustomerServiceImpl;

@SpringBootApplication
public class Demo5Application{

	public static void main(String[] args) {
		
			CustomerServiceImpl service = null;
			AbstractApplicationContext context = (AbstractApplicationContext) SpringApplication
					.run(Demo5Application.class, args);
			service = (CustomerServiceImpl) context.getBean("customerService");
			System.out.println(service.fetchCustomer());
	        context.close();
	}

}
