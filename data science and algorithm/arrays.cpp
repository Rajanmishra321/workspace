#include<iostream>
using namespace std;
int main()
{
    int number[3]={3,5,6};
    cout<<"the value on index 2 is :"<<number[2];
    cout<<endl;

    int second[10]={10,34};
    int n=10;
    for(int i=0; i<n ; i++)
    {
        cout<<"printing the arrays "<<second[i];
        cout<<endl;
    }
}