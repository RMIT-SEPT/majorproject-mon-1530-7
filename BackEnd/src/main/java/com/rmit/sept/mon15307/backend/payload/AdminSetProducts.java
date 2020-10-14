package com.rmit.sept.mon15307.backend.payload;

import com.rmit.sept.mon15307.backend.exceptions.InvalidProductException;

import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class AdminSetProducts {
    // Validates the input format of the specified product ids before
    // returning the ids themselves

    @NotNull
    private List<Long> productIds;

    // public AdminSetProducts(@NotNull List<Product> productIds) {
    //     this.productIds = productIds;
    // }

    // Returns product Ids specified
    // Checks : If list of products is empty
    //          If list of products contains empty value/s
    //          If list contains strings instead of numbers (of type Long)
    public List<Long> getProductIds() {
        // Checks if admin did not specify any product ids
        if(productIds.isEmpty()){
            throw new InvalidProductException("Please specify product ids");
        }
        // Checks if list of product ids provided contains one or more empty values
        int counter = 0;
        for(Long productId: productIds){
            if(productId != null){
                counter += 1;
            }
        }
        if(productIds.size() != counter){
            throw new InvalidProductException("Empty value is present in product id/s request");
        }
        // Checks if any duplicate product ids are specified in the list itself
        Set<Long> checkDuplicatesSet = new HashSet<>();
        for(Long productId: productIds){
            if(!checkDuplicatesSet.add(productId)){
                throw new InvalidProductException("Received duplicate product");
            }
        }

        // Checks if list of product ids contains only Long numbers
        try {
            return productIds;
        } catch (RuntimeException e) {
            throw new InvalidProductException("Invalid request format");
        }
    }
}
