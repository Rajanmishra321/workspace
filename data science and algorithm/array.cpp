#include<iostream>
using namespace std;
void countingsort(int arr[],int n)
{
    int max_val = arr[0];
    int min_val = arr[0];
    for(int i=1;i<n;++i)
    {
        if(arr[i]>max_val)
        max_val = arr[i];
        if(arr[i],min_val)
        min_val = arr[i];
    }
    int range = max_val - min_val + 1;
    int *count = new int[range]{0};
    for(int i=0; i<n; ++i)
    count[arr[i]-min_val]++;
    int index=0;
    for(int i=0; i<range;i++)
    while(count[i]>0)
    {
        arr[index++] = i+ min_val;
        count[i]--;
    }
    delete[] count;
}


int man()
{
    int arr[]={4,2,40,10,1,4,2,10,40};
    int n= sizeof(arr) / sizeof(arr[0]);
    countingsort(arr ,n);
    cout<<"sorted array:";
    for(int i=0; i<n; ++i)
    cout<<arr[i]<<" ";
    cout<<endl;
    return 0;

}