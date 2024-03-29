//Given an array of integers arr[] of size n and n integers, the task is to rotate the array elements to left by d position.
#include <iostream>
using namespace std;
int main()
{
    int size;
    cout<<"please Enter the size of the array: ";
    cin>>size;
    int arr[size];int i=0;
    for(i=0;i<size;i++)
    {
        cout<<"\nEnter element "<<i+1<<" :";
        cin>>arr[i];   
    }
    cout<<"Enter the position for rotation: ";
    int d;
    cin>>d;
    if(d>=size)
    cout<<"cannot be greater than or equal to the length";
    int ar[size];
    cout<<"your array before rotation"<<endl;
    for(i=0;i<size;i++)
    
    {
        
        cout<<arr[i]<<" ";  
    }
    cout<<endl;
    for(i=0;i<size;i++)
    {
        if(d==size)
        d=0;
        ar[i] = arr[d];
        d++;
    }
    cout<<"your array after roatation"<<endl;
    for(i=0;i<size;i++)
    {
        
        cout<<ar[i]<<" ";  
    }
}