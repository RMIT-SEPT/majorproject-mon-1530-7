package com.rmit.sept.mon15307.backend;

import com.rmit.sept.mon15307.backend.Repositories.ProductRepository;
import com.rmit.sept.mon15307.backend.model.Product;
import com.rmit.sept.mon15307.backend.security.JwtAuthenticationEntryPoint;
import com.rmit.sept.mon15307.backend.services.MapValidationErrorService;
import com.rmit.sept.mon15307.backend.services.ProductService;
import com.rmit.sept.mon15307.backend.web.ProductController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest
@ContextConfiguration(classes = {
    JwtAuthenticationEntryPoint.class
})
@Import({ProductController.class, ProductService.class, MapValidationErrorService.class})
public class ProductControllerTests {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProductRepository productRepository;

    @Test
    public void contextsLoads() {
    }

    @Test
    public void shouldListWithNoProducts() throws Exception {
        String expected = "{\n  \"products\": []\n}";
        mockMvc
            .perform(get("/api/products"))
            .andExpect(status().is2xxSuccessful())
            .andExpect(content().json(expected));
    }

    @Test
    public void shouldCreateValidProduct() throws Exception {
        String body = "{\n" +
                      "  \"name\": \"test product\",\n" +
                      "  \"description\": \"test product description\",\n" +
                      "  \"price\": 50,\n" +
                      "  \"duration\": 30\n" +
                      "}";
        mockMvc
            .perform(post("/api/products").contentType("application/json").content(body))
            .andExpect(status().is2xxSuccessful());
    }

    @Test
    public void shouldRejectInvalidProduct() throws Exception {
        String body = "{\n" +
                      "  \"name\": \"test product\",\n" +
                      "  \"price\": 50,\n" +
                      "  \"duration\": -1\n" +
                      "}";
        mockMvc
            .perform(post("/api/products").contentType("application/json").content(body))
            .andExpect(status().is4xxClientError());
    }

    @Test
    public void shouldListWithProducts() throws Exception {
        Product newProduct = new Product();
        newProduct.setDescription("test product description");
        newProduct.setName("test product");
        newProduct.setDuration(30);
        newProduct.setPrice(50);
        this.productService.saveOrUpdateProduct(newProduct);

        String expected = "{\n" +
                          "  \"products\": [\n" +
                          "    {\n" +
                          "      \"name\": \"test product\",\n" +
                          "      \"description\": \"test product " +
                          "description\",\n" +
                          "      \"price\": 50,\n" +
                          "      \"duration\": 30\n" +
                          "    }\n" +
                          "  ]\n" +
                          "}";
        mockMvc
            .perform(get("/api/products"))
            .andExpect(status().is2xxSuccessful())
            .andExpect(content().json(expected));
    }
}
