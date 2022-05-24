
#include <bits/stdc++.h>

using namespace std;

int main()
{
    int t;
    cin>>t;
    while(t--){
        string s;
        cin>>s;
        int n=s.length()
        ;
         for(int i=0;i<n;i++){
                sum=sum+(s[i]&31);
            }
        if(n==1){
            cout<<"Bob"<<" "<<(s[0]&31)<<endl;
        }
        else if(n%2==0){
            
            cout<<"Alice"<<" ";
            int sum=0;
           
            cout<<sum<<endl;
        }
        else{
            cout<<"Alice"<<" ";
            int sum=0;
            for(int i=0;i<n-1;i++){
                sum=sum+(s[i]&31);
            }
            cout<<sum-(s[n-1]&31)<<endl;
        }
    }
    return 0;
}
