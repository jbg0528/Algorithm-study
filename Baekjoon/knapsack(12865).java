import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;
public class Main {
    public static int max=0;
    public static int sum_weight=0;
    public static int sum_value=0;
    public void solution() throws Exception{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st1=new StringTokenizer(br.readLine());
        int n=Integer.parseInt(st1.nextToken());
        int k=Integer.parseInt(st1.nextToken());
        boolean[] visited = new boolean[n];
        int[] weight=new int[n];
        int[] value=new int[n];
        for(int i=0;i<n;i++){
            StringTokenizer st2=new StringTokenizer((br.readLine()));
            weight[i]=Integer.parseInt(st2.nextToken());
            value[i]=Integer.parseInt(st2.nextToken());
        }
        for (int i = 1; i <= n; i++) {
            combination(weight, value,visited, 0, n, i, k);
        }
        bw.write(String.valueOf(max));
        bw.close();
    }
    public static void main(String[] args) throws Exception {
        new Main().solution();
    }
    static void combination(int[] arr,int[] value,boolean[] visited, int start, int n, int r,int k) {
        if (r == 0) {
            print(arr,value,visited, n,k);
            return;
        }

        for (int i = start; i < n; i++) {
            visited[i] = true;
            combination(arr,value, visited, i + 1, n, r - 1,k);
            visited[i] = false;
        }
    }
    static void print(int[] arr,int[] value, boolean[] visited, int n,int k) {
        for (int i = 0; i < n; i++) {
            if (visited[i]) {
                sum_weight=sum_weight+arr[i];
                sum_value=sum_value+value[i];
            }
        }
        if(sum_weight<=k){
            if(sum_value>max){
                max=sum_value;
            }
        }
        sum_weight=0;
        sum_value=0;
    }
}