#include <iostream>
using namespace std;
bool iseven(int a)
{
    // checking odd
    if (a & 1)
    {
        return 0;
    }
    else
    {
        return 1;
    }
}
int main()
{
    int num;
    cout << "enter the number" << endl;
    cin >> num;
    if (iseven(num))
    {
        cout << "number is even" << endl;
    }
    else
    {
        cout << "number is odd" << endl;
    }
}