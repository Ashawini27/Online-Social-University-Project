/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

import java.sql.Date;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author ashwi
 */
public class BorrowTest {
    
    public BorrowTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }

    /**
     * Test of getBookID method, of class Borrow.
     */
    @Test
    public void testGetBookID() {
        System.out.println("getBookID");
        Borrow instance = new Borrow();
        int expResult = 0;
        int result = instance.getBookID();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getMemberID method, of class Borrow.
     */
    @Test
    public void testGetMemberID() {
        System.out.println("getMemberID");
        Borrow instance = new Borrow();
        int expResult = 0;
        int result = instance.getMemberID();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getDayOfBorrowed method, of class Borrow.
     */
    @Test
    public void testGetDayOfBorrowed() {
        System.out.println("getDayOfBorrowed");
        Borrow instance = new Borrow();
        Date expResult = null;
        Date result = instance.getDayOfBorrowed();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getDayOfReturn method, of class Borrow.
     */
    @Test
    public void testGetDayOfReturn() {
        System.out.println("getDayOfReturn");
        Borrow instance = new Borrow();
        Date expResult = null;
        Date result = instance.getDayOfReturn();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of connection method, of class Borrow.
     */
    @Test
    public void testConnection() {
        System.out.println("connection");
        Borrow instance = new Borrow();
        instance.connection();
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of update method, of class Borrow.
     */
    @Test
    public void testUpdate() {
        System.out.println("update");
        String Query = "";
        Borrow instance = new Borrow();
        instance.update(Query);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
}
