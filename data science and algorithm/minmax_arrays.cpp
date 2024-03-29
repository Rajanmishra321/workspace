#include<iostream>
using namespace std;

int getmax(int arr[],int s)
{
    int max = INT_MIN;
    for(int i=0; i<s ; i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    return max;

}

int getmin(int arr[],int s)
{
    int min = INT_MAX;
    for(int i=0; i<s ; i++)
    {
        if(arr[i]<min)
        {
            min=arr[i];
        }
    }
    return min;

}


int main()
{
    int size;
    cin>>size;

    int number[100];
    for(int i=0; i<size; i++)
    {
        cin>>number[i];
    }

    cout<<"the greatest number is : "<<getmax(number,size)<<endl;
    cout<<"the smallest number is : "<<getmin(number,size);

    return 0;
}
