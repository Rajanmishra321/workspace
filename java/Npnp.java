import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.*;
import javax.swing.text.StyledDocument;
import javax.swing.undo.UndoManager;
import javax.swing.undo.CannotUndoException;
import javax.swing.undo.CannotRedoException;
import javax.swing.text.SimpleAttributeSet;
import javax.swing.text.StyleConstants;
import javax.swing.JColorChooser;
import java.awt.Font;
import java.awt.GraphicsEnvironment;

public class Npnp extends JFrame implements ActionListener {
    private JTextPane textArea;
    private JMenuBar menuBar;
    private JMenu fileMenu, themeMenu, formatMenu, editMenu;
    private JMenuItem newMenuItem, openMenuItem, saveMenuItem, exitMenuItem, lightThemeMenuItem, darkThemeMenuItem;
    private JMenuItem textSizeMenuItem, textColorMenuItem, fontStyleMenuItem;
    private JMenu fontFamilyMenu;
    private JMenuItem undoMenuItem, redoMenuItem;
    private static UndoManager undoManager;
    private JMenuItem cutMenuItem, copyMenuItem, pasteMenuItem;

    public Npnp() {
        setTitle("Simple Notepad");

        textArea = new JTextPane();
        textArea.setFont(new Font("Monospaced", Font.PLAIN, 14));

        JScrollPane scrollPane = new JScrollPane(textArea);
        add(scrollPane);

        menuBar = new JMenuBar();

        fileMenu = new JMenu("File");
        newMenuItem = new JMenuItem("New");
        openMenuItem = new JMenuItem("Open");
        saveMenuItem = new JMenuItem("Save");
        exitMenuItem = new JMenuItem("Exit");
        newMenuItem.setIcon(new ImageIcon("new.png"));
        openMenuItem.setIcon(new ImageIcon("open.png"));
        saveMenuItem.setIcon(new ImageIcon("save.png"));
        exitMenuItem.setIcon(new ImageIcon("exit.png"));

        fileMenu.add(newMenuItem);
        fileMenu.add(openMenuItem);
        fileMenu.add(saveMenuItem);
        fileMenu.addSeparator();
        fileMenu.add(exitMenuItem);

        themeMenu = new JMenu("Theme");
        lightThemeMenuItem = new JMenuItem("Light Theme");
        darkThemeMenuItem = new JMenuItem("Dark Theme");
        themeMenu.add(lightThemeMenuItem);
        themeMenu.add(darkThemeMenuItem);

        formatMenu = new JMenu("Format");
        textSizeMenuItem = new JMenuItem("Text Size");
        textColorMenuItem = new JMenuItem("Text Color");
        fontStyleMenuItem = new JMenuItem("Font Style");

        fontFamilyMenu = new JMenu("Font Family");
        String[] fontFamilies = GraphicsEnvironment.getLocalGraphicsEnvironment().getAvailableFontFamilyNames();
        for (String fontFamily : fontFamilies) {
            JMenuItem fontFamilyItem = new JMenuItem(fontFamily);
            fontFamilyMenu.add(fontFamilyItem);
            fontFamilyItem.addActionListener(this);
        }

        formatMenu.add(textSizeMenuItem);
        formatMenu.add(textColorMenuItem);
        formatMenu.add(fontStyleMenuItem);
        formatMenu.add(fontFamilyMenu);

        editMenu = new JMenu("Edit");
        undoMenuItem = new JMenuItem("Undo");
        redoMenuItem = new JMenuItem("Redo");
        cutMenuItem = new JMenuItem("Cut");
        copyMenuItem = new JMenuItem("Copy");
        pasteMenuItem = new JMenuItem("Paste");
        editMenu.add(undoMenuItem);
        editMenu.add(redoMenuItem);
        editMenu.addSeparator();
        editMenu.add(cutMenuItem);
        editMenu.add(copyMenuItem);
        editMenu.add(pasteMenuItem);

        menuBar.add(fileMenu);
        menuBar.add(editMenu);
        menuBar.add(themeMenu);
        menuBar.add(formatMenu);

        setJMenuBar(menuBar);

        newMenuItem.addActionListener(this);
        openMenuItem.addActionListener(this);
        saveMenuItem.addActionListener(this);
        exitMenuItem.addActionListener(this);
        lightThemeMenuItem.addActionListener(this);
        darkThemeMenuItem.addActionListener(this);
        textSizeMenuItem.addActionListener(this);
        textColorMenuItem.addActionListener(this);
        fontStyleMenuItem.addActionListener(this);
        undoMenuItem.addActionListener(this);
        redoMenuItem.addActionListener(this);
        cutMenuItem.addActionListener(this);
        copyMenuItem.addActionListener(this);
        pasteMenuItem.addActionListener(this);

        if (undoManager == null) {
            undoManager = new UndoManager();
            textArea.getDocument().addUndoableEditListener(e -> undoManager.addEdit(e.getEdit()));
        }

        setTheme("Light");
        setSize(800, 600);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == newMenuItem) {
            new Npnp();
        } else if (e.getSource() == openMenuItem) {
            openFile();
        } else if (e.getSource() == saveMenuItem) {
            saveFile();
        } else if (e.getSource() == exitMenuItem) {
            System.exit(0);
        } else if (e.getSource() == cutMenuItem) {
            textArea.cut();
        } else if (e.getSource() == copyMenuItem) {
            textArea.copy();
        } else if (e.getSource() == pasteMenuItem) {
            textArea.paste();
        } else if (e.getSource() == lightThemeMenuItem) {
            setTheme("Light");
        } else if (e.getSource() == darkThemeMenuItem) {
            setTheme("Dark");
        } else if (e.getSource() == textSizeMenuItem) {
            int size = Integer.parseInt(JOptionPane.showInputDialog(this, "Enter text size:"));
            textArea.setFont(textArea.getFont().deriveFont((float) size));
        } else if (e.getSource() == textColorMenuItem) {
            Color selectedColor = JColorChooser.showDialog(this, "Choose Text Color", textArea.getForeground());
            textArea.setForeground(selectedColor);
        } else if (e.getSource() == fontStyleMenuItem) {
            int fontStyle = Font.PLAIN;
            String[] fontStyles = { "Plain", "Bold", "Italic", "Bold Italic" };
            String selectedStyle = (String) JOptionPane.showInputDialog(this, "Select font style:", "Font Style",
                    JOptionPane.PLAIN_MESSAGE, null, fontStyles, fontStyles[0]);

            if (selectedStyle != null) {
                if (selectedStyle.contains("Bold")) {
                    fontStyle += Font.BOLD;
                }
                if (selectedStyle.contains("Italic")) {
                    fontStyle += Font.ITALIC;
                }

                String selectedText = textArea.getSelectedText();

                if (selectedText != null && !selectedText.isEmpty()) {
                    SimpleAttributeSet style = new SimpleAttributeSet();
                    StyleConstants.setFontFamily(style, textArea.getFont().getFamily());
                    StyleConstants.setFontSize(style, textArea.getFont().getSize());
                    StyleConstants.setBold(style, (fontStyle & Font.BOLD) != 0);
                    StyleConstants.setItalic(style, (fontStyle & Font.ITALIC) != 0);

                    int start = textArea.getSelectionStart();
                    int end = textArea.getSelectionEnd();

                    StyledDocument doc = textArea.getStyledDocument();
                    doc.setCharacterAttributes(start, end - start, style, true);
                } else {
                    SimpleAttributeSet style = new SimpleAttributeSet();
                    StyleConstants.setFontFamily(style, textArea.getFont().getFamily());
                    StyleConstants.setFontSize(style, textArea.getFont().getSize());
                    StyleConstants.setBold(style, (fontStyle & Font.BOLD) != 0);
                    StyleConstants.setItalic(style, (fontStyle & Font.ITALIC) != 0);

                    StyledDocument doc = textArea.getStyledDocument();
                    doc.setCharacterAttributes(0, doc.getLength(), style, true);
                }
            }
        } else if (fontFamilyMenu.getMenuComponentCount() > 0) {
            JMenuItem selectedFont = (JMenuItem) e.getSource();
            String fontFamily = selectedFont.getText();
            textArea.setFont(new Font(fontFamily, textArea.getFont().getStyle(), textArea.getFont().getSize()));
        } else if (e.getSource() == undoMenuItem) {
            try {
                if (undoManager.canUndo()) {
                    undoManager.undo();
                }
            } catch (CannotUndoException ex) {
                ex.printStackTrace();
            }
        } else if (e.getSource() == redoMenuItem) {
            try {
                if (undoManager.canRedo()) {
                    undoManager.redo();
                }
            } catch (CannotRedoException ex) {
                ex.printStackTrace();
            }
        }
    }

    private void openFile() {
        JFileChooser fileChooser = new JFileChooser();
        int userChoice = fileChooser.showOpenDialog(this);

        if (userChoice == JFileChooser.APPROVE_OPTION) {
            try {
                String filePath = fileChooser.getSelectedFile().getAbsolutePath();
                BufferedReader reader = new BufferedReader(new FileReader(filePath));
                StringBuilder content = new StringBuilder();
                String line;

                while ((line = reader.readLine()) != null) {
                    content.append(line).append("\n");
                }

                reader.close();
                textArea.setText(content.toString());
            } catch (IOException e) {
                e.printStackTrace();
                JOptionPane.showMessageDialog(this, "Error opening the file.", "Error", JOptionPane.ERROR_MESSAGE);
            }
        }
    }

    private void saveFile() {
        JFileChooser fileChooser = new JFileChooser();
        int userChoice = fileChooser.showSaveDialog(this);

        if (userChoice == JFileChooser.APPROVE_OPTION) {
            try {
                String filePath = fileChooser.getSelectedFile().getAbsolutePath();
                BufferedWriter writer = new BufferedWriter(new FileWriter(filePath));
                writer.write(textArea.getText());
                writer.close();
                JOptionPane.showMessageDialog(this, "File saved successfully!");
            } catch (IOException e) {
                e.printStackTrace();
                JOptionPane.showMessageDialog(this, "Error saving the file.", "Error", JOptionPane.ERROR_MESSAGE);
            }
        }
    }

    private void setTheme(String theme) {
        if (theme.equals("Light")) {
            UIManager.put("MenuBar.background", Color.WHITE);
            UIManager.put("Menu.background", Color.WHITE);
            UIManager.put("MenuItem.background", Color.WHITE);
            getContentPane().setBackground(Color.WHITE);
            textArea.setBackground(Color.WHITE);
            textArea.setForeground(Color.BLACK);
        } else if (theme.equals("Dark")) {
            UIManager.put("MenuBar.background", Color.BLACK);
            UIManager.put("Menu.background", Color.BLACK);
            UIManager.put("MenuItem.background", Color.BLACK);
            getContentPane().setBackground(Color.BLACK);
            textArea.setBackground(Color.BLACK);
            textArea.setForeground(Color.WHITE);
        }
        SwingUtilities.updateComponentTreeUI(this);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new Npnp());
    }
}

