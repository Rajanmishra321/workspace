#include<iostream>
#include<queue>
using namespace std;
int main()
{
    queue<int> q;
    q.push(17);
    q.push(29);
    cout<<"size of queue is:"<<q.size()<<endl;
    q.pop();
    cout<<"size of queue now is: "<<q.size()<<endl;

    cout<<"in the front is :"<<q.front()<<endl;
    if(q.empty())
    {
        cout<<"queue is empty"<<endl;
    }
    else
    {
        cout<<"queue is not empty"<<endl;
    }
    return 0;
}