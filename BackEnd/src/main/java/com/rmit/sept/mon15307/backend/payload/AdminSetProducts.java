package com.rmit.sept.mon15307.backend.payload;

import com.rmit.sept.mon15307.backend.exceptions.InvalidProductException;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.*;

public class AdminSetProducts {
    // Validates the input format of the specified product ids before
    // returning the ids themselves

    // Change productIds to products
    @NotNull(message = "Something is not working properly")
    private List<Long> products;

     public AdminSetProducts(@Valid @NotNull(message = "YO!!!!") Map<String, Long[]> productIds) {
         Long[] tmp = productIds.get("products");
         this.products = Arrays.asList(tmp);
     }

    // Returns product Ids specified
    // Checks : If list of products is empty
    //          If list of products contains empty value/s
    public List<Long> getProductIds() {
        // Checks if admin did not specify any product ids
        if(products.isEmpty()){
            throw new InvalidProductException("Please specify product ids");
        }
        // Checks if list of product ids provided contains one or more empty values
        int counter = 0;
        for(Long productId: products){
            if(productId != null){
                counter += 1;
            }
        }
        if(products.size() != counter){
            throw new InvalidProductException("Empty value is present in product id/s request");
        }
        // Checks if any duplicate product ids are specified in the list itself
        Set<Long> checkDuplicatesSet = new HashSet<>();
        for(Long productId: products){
            if(!checkDuplicatesSet.add(productId)){
                throw new InvalidProductException("Received duplicate product");
            }
        }

        // Checks if list of product ids contains only Long numbers
        try {
            return products;
        } catch (RuntimeException e) {
            throw new InvalidProductException("Invalid request format");
        }
    }
}
