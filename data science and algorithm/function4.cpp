#include <iostream>
using namespace std;
bool isprime(int a)
{
    for (int i = 2; i < a; i++)
    {
        if (a % i == 0)
        {
            return 0;
        }
        
    }
    return 1;
    
}
int main()
{
    int a;
    cout<<"enter a"<<endl;
    cin >> a;
    if(isprime(a))
    {
        cout<<"this is prime"<<endl;
    }
    else{
         cout<<"this is not a prime number"<<endl;
    }
   
}
