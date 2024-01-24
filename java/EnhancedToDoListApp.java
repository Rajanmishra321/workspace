import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.*;
import java.util.ArrayList;

public class EnhancedToDoListApp {
    private JFrame frame;
    private JTextField taskField;
    private DefaultListModel<TaskItem> taskListModel;
    private JList<TaskItem> taskList;

    public EnhancedToDoListApp() {
        frame = new JFrame("Enhanced To-Do List App");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 300);
        frame.setLayout(new BorderLayout());

        taskField = new JTextField();
        taskListModel = new DefaultListModel<>();
        taskList = new JList<>(taskListModel);
        taskList.setCellRenderer(new TaskCellRenderer());

        JScrollPane scrollPane = new JScrollPane(taskList);
        frame.add(taskField, BorderLayout.NORTH);
        frame.add(scrollPane, BorderLayout.CENTER);

        JButton addButton = new JButton("Add Task");
        JButton removeButton = new JButton("Remove Task");
        JButton clearCompletedButton = new JButton("Clear Completed");

        JPanel buttonPanel = new JPanel(new FlowLayout());
        buttonPanel.add(addButton);
        buttonPanel.add(removeButton);
        buttonPanel.add(clearCompletedButton);

        frame.add(buttonPanel, BorderLayout.SOUTH);

        JMenuBar menuBar = new JMenuBar();
        JMenu fileMenu = new JMenu("File");
        JMenuItem saveMenuItem = new JMenuItem("Save List");
        JMenuItem loadMenuItem = new JMenuItem("Load List");

        fileMenu.add(saveMenuItem);
        fileMenu.add(loadMenuItem);
        menuBar.add(fileMenu);

        frame.setJMenuBar(menuBar);

        addButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String task = taskField.getText().trim();
                if (!task.isEmpty()) {
                    taskListModel.addElement(new TaskItem(task, false));
                    taskField.setText("");
                }
            }
        });

        removeButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                int selectedIndex = taskList.getSelectedIndex();
                if (selectedIndex >= 0) {
                    taskListModel.remove(selectedIndex);
                }
            }
        });

        clearCompletedButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                ArrayList<TaskItem> completedTasks = new ArrayList<>();
                for (int i = 0; i < taskListModel.size(); i++) {
                    TaskItem task = taskListModel.getElementAt(i);
                    if (task.isCompleted()) {
                        completedTasks.add(task);
                    }
                }

                for (TaskItem completedTask : completedTasks) {
                    taskListModel.removeElement(completedTask);
                }
            }
        });

        saveMenuItem.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                JFileChooser fileChooser = new JFileChooser();
                int returnValue = fileChooser.showSaveDialog(frame);
                if (returnValue == JFileChooser.APPROVE_OPTION) {
                    File selectedFile = fileChooser.getSelectedFile();
                    try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(selectedFile))) {
                        oos.writeObject(new ArrayList<TaskItem>());
                    } catch (IOException ex) {
                        ex.printStackTrace();
                    }
                }
            }
        });

        loadMenuItem.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                JFileChooser fileChooser = new JFileChooser();
                int returnValue = fileChooser.showOpenDialog(frame);
                if (returnValue == JFileChooser.APPROVE_OPTION) {
                    File selectedFile = fileChooser.getSelectedFile();
                    try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(selectedFile))) {
                        ArrayList<TaskItem> tasks = (ArrayList<TaskItem>) ois.readObject();
                        taskListModel.clear();
                        taskListModel.addAll(tasks);
                    } catch (IOException | ClassNotFoundException ex) {
                        ex.printStackTrace();
                    }
                }
            }
        });

        taskList.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                if (e.getClickCount() == 2) {
                    int selectedIndex = taskList.getSelectedIndex();
                    if (selectedIndex >= 0) {
                        TaskItem task = taskListModel.getElementAt(selectedIndex);
                        task.setCompleted(!task.isCompleted());
                        taskListModel.set(selectedIndex, task);
                    }
                }
            }
        });

        frame.setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new EnhancedToDoListApp());
    }

    class TaskItem implements Serializable {
        private String task;
        private boolean completed;

        public TaskItem(String task, boolean completed) {
            this.task = task;
            this.completed = completed;
        }

        public String getTask() {
            return task;
        }

        public boolean isCompleted() {
            return completed;
        }

        public void setCompleted(boolean completed) {
            this.completed = completed;
        }

        @Override
        public String toString() {
            return task + (completed ? " (Completed)" : "");
        }
    }

    class TaskCellRenderer extends DefaultListCellRenderer {
        @Override
        public Component getListCellRendererComponent(JList<?> list, Object value, int index, boolean isSelected, boolean cellHasFocus) {
            super.getListCellRendererComponent(list, value, index, isSelected, cellHasFocus);
            if (value instanceof TaskItem) {
                TaskItem task = (TaskItem) value;
                if (task.isCompleted()) {
                    setForeground(Color.GRAY);
                }
            }
            return this;
        }
    }
}
