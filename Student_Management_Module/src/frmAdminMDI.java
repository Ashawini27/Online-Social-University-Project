
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.Graphics;
import java.awt.*;
import javax.swing.ImageIcon;
import javax.swing.JDesktopPane;
import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.KeyStroke;


public class frmAdminMDI extends JFrame implements ActionListener {
    Image img = Toolkit.getDefaultToolkit().getImage("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");
    private JMenuBar menubar;
    private JMenu mnuAccounts;
    private JMenu mnuStdDetails;
    private JMenu mnuView;
    private JMenu mnuOptions;
    private JMenu mnuTools;
    private JMenu mnuLib;
    private JMenuItem mnuNewUser;
    private JMenuItem mnuEditUser;
    private JMenuItem mnuDeleteUser;
    private JMenuItem mnuNewReg;
    private JMenuItem mnuEditReg;
    private JMenuItem mnuDelDetails;
    private JMenuItem mnuEditMark;
    private JMenuItem mnuViewStdDetails;
    private JMenuItem mnuMemList;
    private JMenuItem mnuMarkList;
    private JMenuItem mnuAddSubs,mnuEditSubs,mnuDelSubs;
    private JMenuItem mnuSubAlloc;
    private JMenuItem mnuCalc,  mnuNotepad;
    public static JDesktopPane desktop;
    
    public frmAdminMDI() {
        super("Student Management System");
        this.setSize(Settings.getScreenSize().width, Settings.getScreenSize().height - 30);
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        setIconImage(new ImageIcon(ClassLoader.getSystemResource("images/appicon.png")).getImage());
        setExtendedState(MAXIMIZED_BOTH);
        desktop = new JDesktopPane();
        menubar = new JMenuBar();
        mnuAccounts = new JMenu("Accounts");
        mnuStdDetails = new JMenu("Student details");
        mnuView = new JMenu("View");
        mnuOptions=new JMenu("Options");
        mnuTools = new JMenu("Tools");
        mnuLib = new JMenu("Access Library");
        mnuNewUser = new JMenuItem("New User");
        mnuEditUser = new JMenuItem("Edit User");
        mnuDeleteUser = new JMenuItem("Delete User");
        mnuNewReg = new JMenuItem("New Registration");
        mnuEditReg = new JMenuItem("Edit Registration");
        mnuDelDetails = new JMenuItem("Delete Details");
        mnuEditMark = new JMenuItem("Edit Mark");
        mnuViewStdDetails = new JMenuItem("Student Details");
        mnuMemList = new JMenuItem("Member List");
        mnuMarkList = new JMenuItem("Mark List");
        mnuAddSubs=new JMenuItem("Add Subjects");
        mnuEditSubs=new JMenuItem("Edit Subjects");
        mnuDelSubs=new JMenuItem("Delete Subjects");
        mnuSubAlloc=new JMenuItem("Subject Allocation");
        mnuNotepad = new JMenuItem("Calculator");
        mnuCalc = new JMenuItem("Calculator");

        mnuAccounts.add(mnuNewUser);
        mnuNewUser.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_F2, KeyEvent.ALT_MASK));
        mnuNewUser.setIcon(new ImageIcon(ClassLoader.getSystemResource("images/user.png")));
        mnuAccounts.add(mnuEditUser);
        mnuEditUser.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_F3, KeyEvent.ALT_MASK));
        mnuEditUser.setIcon(new ImageIcon(ClassLoader.getSystemResource("images/editusr.png")));
        mnuAccounts.addSeparator();
        mnuAccounts.add(mnuDeleteUser);
        mnuDeleteUser.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_F4, KeyEvent.ALT_MASK));
        mnuDeleteUser.setIcon(new ImageIcon(ClassLoader.getSystemResource("images/delusr.png")));
        mnuStdDetails.add(mnuNewReg);
        mnuNewReg.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_N, KeyEvent.CTRL_MASK));
        mnuNewReg.setIcon(new ImageIcon(ClassLoader.getSystemResource("images/newreg.png")));
        mnuStdDetails.add(mnuEditReg);
        mnuEditReg.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_E, KeyEvent.CTRL_MASK));
        mnuEditReg.setIcon(new ImageIcon(ClassLoader.getSystemResource("images/editreg.png")));
        mnuStdDetails.add(mnuDelDetails);
        mnuDelDetails.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_D, KeyEvent.CTRL_MASK));
        mnuDelDetails.setIcon(new ImageIcon(ClassLoader.getSystemResource("images/delreg.png")));
        mnuStdDetails.addSeparator();
        mnuStdDetails.add(mnuEditMark);
        mnuEditMark.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_M, KeyEvent.CTRL_MASK));
        mnuEditMark.setIcon(new ImageIcon(ClassLoader.getSystemResource("images/editmark.png")));
        mnuView.add(mnuMarkList);
        mnuMarkList.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_L, KeyEvent.CTRL_MASK));
        mnuMarkList.setIcon(new ImageIcon(ClassLoader.getSystemResource("images/marklist.png")));
        mnuView.add(mnuMemList);
        mnuMemList.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_S, KeyEvent.CTRL_MASK));
        mnuMemList.setIcon(new ImageIcon(ClassLoader.getSystemResource("images/memlist.png")));
        mnuView.add(mnuViewStdDetails);
        mnuViewStdDetails.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_T, KeyEvent.CTRL_MASK));
        mnuViewStdDetails.setIcon(new ImageIcon(ClassLoader.getSystemResource("images/stddet.png")));
        mnuOptions.add(mnuAddSubs);
        mnuOptions.add(mnuEditSubs);
        mnuOptions.add(mnuDelSubs);
        mnuOptions.addSeparator();
        mnuOptions.add(mnuSubAlloc);        
        mnuTools.add(mnuCalc);
        mnuCalc.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_C, KeyEvent.CTRL_MASK));
        mnuCalc.setIcon(new ImageIcon(ClassLoader.getSystemResource("images/calc.png")));
        mnuTools.add(mnuNotepad);
        mnuNotepad.setAccelerator(KeyStroke.getKeyStroke(KeyEvent.VK_U, KeyEvent.CTRL_MASK));
        mnuNotepad.setIcon(new ImageIcon(ClassLoader.getSystemResource("images/notepad.png")));


        menubar.add(mnuAccounts);
        menubar.add(mnuStdDetails);
        menubar.add(mnuView);
        menubar.add(mnuOptions);
        menubar.add(mnuTools);
        mnuNewUser.addActionListener(this);
        mnuEditUser.addActionListener(this);
        mnuDeleteUser.addActionListener(this);
        mnuNewReg.addActionListener(this);
        mnuEditReg.addActionListener(this);
        mnuDelDetails.addActionListener(this);
        mnuEditMark.addActionListener(this);
        mnuMarkList.addActionListener(this);
        mnuMemList.addActionListener(this);
        mnuViewStdDetails.addActionListener(this);
        mnuAddSubs.addActionListener(this);
        mnuEditSubs.addActionListener(this);
        mnuDelSubs.addActionListener(this);
        mnuSubAlloc.addActionListener(this);
        mnuCalc.addActionListener(this);        
        mnuNotepad.addActionListener(this);
        this.setJMenuBar(menubar);
        this.add(desktop);
    }//constructor closed
   
    public void paintComponent(Graphics g) {
        paintComponent(g);
        g.drawImage(img, 50, 50, null);
    }  
    public void actionPerformed(ActionEvent e) {
        try {
            if (e.getSource() == mnuNewUser) {
                NewUserReg frm = new NewUserReg();
                desktop.add(frm);
                frm.setVisible(true);
            }
            if (e.getSource() == mnuEditUser) {
                Edituser frm = new Edituser();
                desktop.add(frm);
                frm.setVisible(true);
            }
            if (e.getSource() == mnuDeleteUser) {
                Deleteuser frm = new Deleteuser();
                desktop.add(frm);
                frm.setVisible(true);
            }
            if (e.getSource() == mnuNewReg) {
                NewStdReg frm = new NewStdReg();
                desktop.add(frm);
                frm.setVisible(true);
            }
            if (e.getSource() == mnuEditReg) {
                EditStdReg frm = new EditStdReg();
                desktop.add(frm);
                frm.setVisible(true);

            }
            if (e.getSource() == mnuDelDetails) {
                Deletedetails frm = new Deletedetails();
                desktop.add(frm);
                frm.setVisible(true);
            }
            if (e.getSource() == mnuMarkList) {
                viewMark frm = new viewMark();
                desktop.add(frm);
                frm.setVisible(true);
            }
            if (e.getSource() == mnuEditMark) {
                EditMark frm = new EditMark();
                desktop.add(frm);
                frm.setVisible(true);
            }
            if (e.getSource() == mnuCalc) {
                Runtime.getRuntime().exec("calc.exe");
            }
            if (e.getSource() == mnuNotepad) {
                Runtime.getRuntime().exec("notepad.exe");
            }
            if (e.getSource() == mnuMemList) {
                MembersList frm = new MembersList();
                desktop.add(frm);
                frm.setVisible(true);
            }
            if (e.getSource() == mnuViewStdDetails) {
                User frm = new User();
                desktop.add(frm);
                frm.setVisible(true);
            }
            if(e.getSource()==mnuAddSubs){
                AddSubjects frm=new AddSubjects();
                desktop.add(frm);
                frm.setVisible(true);
            }
            if(e.getSource()==mnuEditSubs){
                EditSubjects frm=new EditSubjects();
                desktop.add(frm);
                frm.setVisible(true);
            }
             if(e.getSource()==mnuDelSubs){
                DelSubjects frm=new DelSubjects();
                desktop.add(frm);
                frm.setVisible(true);
            }
            if(e.getSource()==mnuSubAlloc){
                SubjectAllocation frm=new SubjectAllocation();
                desktop.add(frm);
                frm.setVisible(true);
            }
        } catch (Exception ex) {
            JOptionPane.showMessageDialog(new JFrame(), "Error, Cannot load window" + ex.toString(), "Error", JOptionPane.ERROR_MESSAGE);
        }//try catch closed
    }//actionPerformed() closed
} //class closed

