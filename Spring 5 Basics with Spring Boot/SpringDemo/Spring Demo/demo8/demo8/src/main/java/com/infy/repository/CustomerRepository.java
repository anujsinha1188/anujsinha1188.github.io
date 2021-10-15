package com.infy.repository;


import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Repository;

import com.infy.dto.CustomerDTO;


@Repository
public class CustomerRepository {
	@PostConstruct
	public void initializer()
	{
		CustomerDTO customerDTO = new CustomerDTO();
		customerDTO.setAddress("Chennai");
		customerDTO.setName("Jack"); 
		customerDTO.setEmail("Jack@infy.com");
		customerDTO.setPhoneNo(9951212222l);
		customers = new ArrayList<>();
		customers.add(customerDTO);
	}
	List <CustomerDTO> customers=null;
	public String createCustomer(CustomerDTO dto) {
		customers = new ArrayList<>();
		customers.add(dto);
		return "Customer added successfully"+customers.indexOf(dto);
	}

	public String fetchCustomer()  {
		return " The customer fetched  "+customers;
	}
	public void deleteCustomer(long phoneNumber) throws Exception
	{
	
		for(CustomerDTO customer : customers)
		{ 
			if(customer.getPhoneNo() == phoneNumber)
			{
				customers.remove(customer);
				System.out.println(customer.getName()+"of phoneNumber"+customer.getPhoneNo()+"\t got deleted successfully");
				break;
			}
			else 
				throw new Exception("Customer does not exist");
		}
	
	}
}
