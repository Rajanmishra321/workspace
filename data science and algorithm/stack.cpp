#include <iostream>
#include <stack>
using namespace std;
struct node
{
    int val;
    node* next;
};

class mystack
{
    node* head;
    int stacksize;
    public:
    mystack()
    {
        head = NULL;
        stacksize = 0;
    }

    void push(int element)
    {
        node* temp = new node();
        temp->val=element;
        temp->next=head;
        head=temp;
    }

    void pop()
    {

    }


}









/*//implimentation of stack by array
class Stack
{
public:
    int *arr;
    int top;
    int size;
    Stack(int size)
    {
        this->size = size;
        arr = new int[size];
        top = -1;
    }

    void push(int element)
    {
        if (size - top >1)
        {
            top++;
            arr[top] = element;
        }
        else
        {
            cout << "stack is overflow" << endl;
        }
    }

    void pop()
    {
        if (top >= 0)
        {
            top--;
        }
        else
        {
            cout << "stack is underflow" << endl;
        }
    }

    int peek()
    {
        if (top >= 0)
        {
            return arr[top];
        }
        else
        {
            cout << "stack is empty" << endl;
            return -1;
        }
    }

    bool isempty()
    {
        if (top == -1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

};
int main()
{
    Stack st(5);
    st.push(22);
    st.push(43);
    st.push(33);
    st.push(27);
    st.push(29);
    st.push(89);

    cout<<st.peek()<<endl;
    st.pop();
    cout<<st.peek()<<endl;
    st.pop();
    cout<<st.peek()<<endl;
    st.pop();
    cout<<st.peek()<<endl;

    if(st.isempty())
    {
        cout<<"stack khali h bhai"<<endl;
    }
    else{
        cout<<"stack khali nhi h bhai"<<endl;
    }
*/





    /*
        //creation of stack
        stack<int> s;

        //push operation
        s.push(2);
        s.push(3);

        //pop operation
        s.pop();

        //top operation
        cout<<"this is top element "<<s.top()<<endl;

        //empty operation
        if(s.empty())
        {
            cout<<"stack is empty"<<endl;

        }
        else
        {
            cout<<"stack is not empty"<<endl;
        }

        //sizeof operation
        cout<<"size of stack is"<<s.size()<<endl;
    */

    return 0;
}