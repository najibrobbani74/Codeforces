#include <bits/stdc++.h>
using namespace std;

int main(int argc, char const *argv[])
{
    int count, street, biggest;
    double distance = 0.0;
    cin >> count >> street;
    int lamps[count + 1];
    for (size_t i = 0; i < count; i++)
    {
        cin >> lamps[i];
    }
    sort(lamps, lamps + count);
    distance = lamps[0] >= (street - lamps[count - 1]) ? (double)lamps[0] : (double)(street - lamps[count - 1]);
    for (size_t i = 0; i < count-1; i++)
    {
        if ((lamps[i + 1] - lamps[i]) / 2.0 > distance)
        {
            distance = (lamps[i + 1] - lamps[i]) / 2.0;
        }
        
    }
    cout << fixed << setprecision(10);
    cout << distance << endl;
    return 0;
}
