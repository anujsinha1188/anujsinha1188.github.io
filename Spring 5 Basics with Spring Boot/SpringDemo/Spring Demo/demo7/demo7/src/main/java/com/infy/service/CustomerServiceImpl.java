package com.infy.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

@Service("customerService")
@Scope("singleton")
// @Scope("prototype")
public class CustomerServiceImpl implements CustomerService {
	@Value("10")
	private int count;

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public String fetchCustomer() {
		return " The number of customers fetched are : " + count;
	}
}