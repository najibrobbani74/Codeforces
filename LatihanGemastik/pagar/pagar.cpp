#include <bits/stdc++.h>
using namespace std;

int main()
{
    int count, k, first, sum = 1000000, ind = 1;
    cin >> count;
    cin >> k;
    int papan[count];
        for (size_t i = 0; i < count; i++)
        {
            cin >> papan[i];
            papan[i] = i>0?papan[i] + papan[i-1]:papan[i];
            // cout<<papan[i]<<" ";
        }
    if (count == k)
    {
        cout << 1 << endl;
    }
    else
    {
        sum = papan[k-1];
        for (size_t i = 1; i < count-k+1; i++)
        {
            int a = 0;
            a = papan[i+(k-1)]-papan[i-1];
            if (a < sum)
            {
                sum = a;
                ind = i + 1;
            }
        }
        cout << ind << endl;
    }

    return 0;
}
