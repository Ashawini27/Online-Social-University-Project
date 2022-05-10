/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author ashwi
 */
public class BooksTest {
    
    public BooksTest() {
    }
    
    @BeforeClass
    public static void setUpClass() {
    }
    
    @AfterClass
    public static void tearDownClass() {
    }

    /**
     * Test of getBookID method, of class Books.
     */
    @Test
    public void testGetBookID() {
        System.out.println("getBookID");
        Books instance = new Books();
        int expResult = 0;
        int result = instance.getBookID();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getSubject method, of class Books.
     */
    @Test
    public void testGetSubject() {
        System.out.println("getSubject");
        Books instance = new Books();
        String expResult = "";
        String result = instance.getSubject();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getTitle method, of class Books.
     */
    @Test
    public void testGetTitle() {
        System.out.println("getTitle");
        Books instance = new Books();
        String expResult = "";
        String result = instance.getTitle();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getAuthor method, of class Books.
     */
    @Test
    public void testGetAuthor() {
        System.out.println("getAuthor");
        Books instance = new Books();
        String expResult = "";
        String result = instance.getAuthor();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getPublisher method, of class Books.
     */
    @Test
    public void testGetPublisher() {
        System.out.println("getPublisher");
        Books instance = new Books();
        String expResult = "";
        String result = instance.getPublisher();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getCopyright method, of class Books.
     */
    @Test
    public void testGetCopyright() {
        System.out.println("getCopyright");
        Books instance = new Books();
        int expResult = 0;
        int result = instance.getCopyright();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getEdition method, of class Books.
     */
    @Test
    public void testGetEdition() {
        System.out.println("getEdition");
        Books instance = new Books();
        int expResult = 0;
        int result = instance.getEdition();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getPages method, of class Books.
     */
    @Test
    public void testGetPages() {
        System.out.println("getPages");
        Books instance = new Books();
        int expResult = 0;
        int result = instance.getPages();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getISBN method, of class Books.
     */
    @Test
    public void testGetISBN() {
        System.out.println("getISBN");
        Books instance = new Books();
        String expResult = "";
        String result = instance.getISBN();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getNumberOfBooks method, of class Books.
     */
    @Test
    public void testGetNumberOfBooks() {
        System.out.println("getNumberOfBooks");
        Books instance = new Books();
        int expResult = 0;
        int result = instance.getNumberOfBooks();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getNumberOfAvailbleBooks method, of class Books.
     */
    @Test
    public void testGetNumberOfAvailbleBooks() {
        System.out.println("getNumberOfAvailbleBooks");
        Books instance = new Books();
        int expResult = 0;
        int result = instance.getNumberOfAvailbleBooks();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getNumberOfBorrowedBooks method, of class Books.
     */
    @Test
    public void testGetNumberOfBorrowedBooks() {
        System.out.println("getNumberOfBorrowedBooks");
        Books instance = new Books();
        int expResult = 0;
        int result = instance.getNumberOfBorrowedBooks();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getLibrary method, of class Books.
     */
    @Test
    public void testGetLibrary() {
        System.out.println("getLibrary");
        Books instance = new Books();
        String expResult = "";
        String result = instance.getLibrary();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getAvailble method, of class Books.
     */
    @Test
    public void testGetAvailble() {
        System.out.println("getAvailble");
        Books instance = new Books();
        boolean expResult = false;
        boolean result = instance.getAvailble();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of connection method, of class Books.
     */
    @Test
    public void testConnection() {
        System.out.println("connection");
        String Query = "";
        Books instance = new Books();
        instance.connection(Query);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of update method, of class Books.
     */
    @Test
    public void testUpdate() {
        System.out.println("update");
        String Query = "";
        Books instance = new Books();
        instance.update(Query);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
}
