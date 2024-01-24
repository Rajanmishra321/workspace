import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.stage.Stage;

public class ToDoListApp extends Application {
    private ListView<String> toDoListView;
    private TextField taskInput;

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("To-Do List App");

        // Create a list view to display tasks
        toDoListView = new ListView<>();

        // Create a text field for entering tasks
        taskInput = new TextField();
        taskInput.setPromptText("Enter a task");
        taskInput.setPrefWidth(300);

        // Create a button for adding tasks
        Button addButton = new Button("Add Task");
        addButton.setOnAction(e -> addTask());

        // Create a button for removing selected tasks
        Button removeButton = new Button("Remove Selected Task");
        removeButton.setOnAction(e -> removeSelectedTask());

        // Create a layout for buttons
        HBox buttonBox = new HBox(10, taskInput, addButton, removeButton);

        // Create a layout for the main scene
        VBox mainLayout = new VBox(10, buttonBox, toDoListView);
        mainLayout.setPadding(new Insets(10));

        Scene scene = new Scene(mainLayout, 400, 300);
        primaryStage.setScene(scene);

        primaryStage.show();
    }

    private void addTask() {
        String task = taskInput.getText().trim();
        if (!task.isEmpty()) {
            toDoListView.getItems().add(task);
            taskInput.clear();
        }
    }

    private void removeSelectedTask() {
        int selectedIndex = toDoListView.getSelectionModel().getSelectedIndex();
        if (selectedIndex >= 0) {
            toDoListView.getItems().remove(selectedIndex);
        }
    }
}

