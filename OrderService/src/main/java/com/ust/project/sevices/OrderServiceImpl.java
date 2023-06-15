package com.ust.project.sevices;

import java.time.Instant;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.ust.project.Model.Order;
import com.ust.project.exceptions.OrderServiceCustomException;
import com.ust.project.repo.OrderRepository;



@Service
public  class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Override
    public long placeOrder(Order order) {
        System.out.println("Order is about to place");

        // Create order entity with status "CREATED"
        
        order.setOrderStatus("CREATED");
        order.setOrderDate(Instant.now());
        long p=order.getAmount();
       order.setAmount(p);
        order = orderRepository.save(order);

        String orderStatus;
        try {
            System.out.println(" Payment done Successfully. Changing the Order status to PLACED");
            orderStatus = "PLACED";
        } catch (Exception e) {
            System.out.println(" Error occurred in payment. Changing order status to PAYMENT_FAILED");
            orderStatus = "PAYMENT_FAILED";
        }

        order.setOrderStatus(orderStatus);
        orderRepository.save(order);

        System.out.println("Order Placed successfully with Order Id: " + order.getId());

        return order.getId();
    }

    @Override
    public Order getOrderDetails(long orderId) {
        System.out.println(" Get order details for Order Id: " + orderId);

        Optional<Order> orderOptional = orderRepository.findById(orderId);
        if (!orderOptional.isPresent()) {
            // Handle the case when the order is not found
            throw new OrderServiceCustomException("Order not found for the order Id:" + orderId,
                    "NOT_FOUND",
                    404);
        }
       Order order = orderOptional.get();
        return order;
    }
    
    @Override
    public Order updateOrder( Order order) {
    	 order.setOrderDate(Instant.now());
    	String orderStatus;
        try {
            System.out.println(" Order updated Successfully. Changing the Order status to UPDATED");
            orderStatus = "UPDATED";
        } catch (Exception e) {
            System.out.println(" Error occurred in payment. Changing order status to PAYMENT_FAILED");
            orderStatus = "PAYMENT_FAILED";
        }

        order.setOrderStatus(orderStatus);
    	return orderRepository.save(order);
    }

}