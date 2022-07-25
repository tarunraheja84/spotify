#include<bits/stdc++.h>
using namespace std;
#define int long long
#define endl '\n'
void dfs(int node,vector<int> &vis,vector<vector<int>> &adj,vector<int> &v){
    v.push_back(node);
    vis[node]=1;
    for(auto it:adj[node]){
        if(!vis[it]){
            dfs(it,vis,adj,v);
        }
    }
}

void solve(){
    cout<<1<<endl;
}

int32_t main()
{
ios_base::sync_with_stdio(false);
 cin.tie(NULL);
int t=1;
cin>>t;
while(t--){
solve();
}
return 0;
}