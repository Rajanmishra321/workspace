#include <iostream>
using namespace std;
void merge(int arr[], int l, int m, int h)
{
    int temp[h - l + 1];
    int i = l;
    int j = m + 1;
    int k = 0;
    while (i <= m && j <= h)
    {
        if (arr[i] <= arr[j])
        {
            temp[k] = arr[i];
            i++;
        }
        else
        {
            temp[k] = arr[j];
            j++;
        }
        k++;
    }
    while (i <= m)
    {
        temp[k] = arr[i];
        i++;
        k++;
    }
    while (j <= h)
    {
        temp[k] = arr[j];
        j++;
        k++;
    }
    for (int i = l; i <= h; i++)
    {
        arr[i] = temp[i - l];
    }
}
void merge_sort(int arr[], int l, int h)
{
    if (l < h)
    {
        int m = (l + h) / 2;

        merge_sort(arr, l, m);
        merge_sort(arr, m + 1, h);
        merge(arr, l, m, h);
    }
}
int main()
{
    int arr[] ={4,2,40,10,1,4,2,1,10,40} ;
    int n = sizeof(arr) / sizeof(arr[0]);

    merge_sort(arr, 0, n - 1);
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
    return 0;
}