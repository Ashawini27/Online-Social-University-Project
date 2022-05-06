/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

import java.awt.event.ActionEvent;
import junit.framework.TestCase;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

/**
 *
 * @author ashwi
 */
public class LoginTest extends TestCase {
    
    public LoginTest(String testName) {
        super(testName);
    }

    @BeforeClass
    public static void setUpClass() throws Exception {
    }

    @AfterClass
    public static void tearDownClass() throws Exception {
    }

    /**
     * Test of actionPerformed method, of class Login.
     */
    public void testActionPerformed() {
        System.out.println("actionPerformed");
        ActionEvent e = null;
        Login instance = new Login();
        instance.actionPerformed(e);
        
        
        // TODO review the generated test code and remove the default call to fail.
    }
    
    @Test 
    void inputsinput()
    {
        
    }

    /**
     * Test of main method, of class Login.
     */
    public void testMain() {
        System.out.println("main");
        String[] args = null;
        Login.main(args);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
}
