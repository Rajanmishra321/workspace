#include<iostream>
using namespace std;

void reversearray(int arr[],int n)
{
    int start = 0;
    int end = n-1;

    while(start<=end)
    {
        swap(arr[start],arr[end]);
        start++;
        end--;
    }

}


void printarray(int arr[],int n)
{
    for(int i=0; i<n; i++)
    {
        cout<<arr[i]<<" ";
    }
    cout<<endl;
}


int main()
{
    int arr[5]={1,2,3,4,5};
    int brr[6]={9,8,7,6,5,4};

    reversearray(arr,5);
    reversearray(brr,6);

    printarray(arr,5);
    printarray(brr,6);

    return 0;
}