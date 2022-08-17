package product_community;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Hello world!
 *
 */

@SpringBootApplication
public class ProductCommunity {
    public static void main( String[] args ){
    	SpringApplication.run(ProductCommunity.class,args);
        System.out.println( "-->Spring is Running" );
    }
}
