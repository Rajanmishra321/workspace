#include<iostream>
// #include<math.h>
using namespace std;

int power()
{
    int a, b;
    cin>>a>>b;
    int ans = 1;

    for(int i=1; i<=b ;i++)
    {
        ans=ans*a;
        
    }
    return ans;
}
int main()
{
    // int a;
    // int b;
    // cout<<"enter a and b"<<endl;
    // cin>>a>>b;


    /*int ans = 1;

    for(int i=1; i<=b ;i++)
    {
        ans=ans*a;
        
    }
    cout<< "a ka power b is =" << ans<<endl; */

    //by using function

   int answer = power();
    cout<<answer;
}