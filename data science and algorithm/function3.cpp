#include <iostream>
using namespace std;

int factorial(int a)
{
    int fact = 1;
    for (int i = 1; i <= a; i++)
    {
        fact = fact * i;
    }
    return fact;
}

int ncr(int a, int r)
{
    int nume = factorial(a);
    int deno = (factorial(r)) * (factorial(a - r));
    int ans = nume / deno;
    return ans;
}
int main()
{
    int a, r;
    cout << "enter a and r for ncr" << endl;
    cin >> a >> r;
    int ans = ncr(a, r);
    cout << "ncr of entered value is " << ans << endl;
}