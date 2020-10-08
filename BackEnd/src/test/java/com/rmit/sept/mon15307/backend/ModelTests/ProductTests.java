package com.rmit.sept.mon15307.backend.ModelTests;

import com.rmit.sept.mon15307.backend.model.Product;
import com.rmit.sept.mon15307.backend.services.ProductService;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
public class ProductTests {

    Product testProduct;
    ProductService proService;
    String id;


    @Before
    public void init() {
        testProduct = new Product();
        proService = new ProductService();
        id = testProduct.getId();
    }

    @Test
    public void idGenerationTest(){
        assertNotNull("Checks product ID is actaully being generated", id);
    }

    @Test
    public void productSearchByIdTest(){
        proService.saveOrUpdateProduct(testProduct);
        Product testProDup = proService.findByProductId(id);

        assertEquals("Should save and locate the saved product by ID: ",testProduct, testProDup);
    }


    @Test
    public void updateProductTest(){
        proService.saveOrUpdateProduct(testProduct);
        Product testProDup = proService.findByProductId(id);

        testProduct.setDescription("Updated Discription");
        Product testUpdate = proService.findByProductId(id);

        assertNotEquals("Product should NOT match the original product as it should have been updated in the repo: ", testUpdate, testProDup);
    }
}