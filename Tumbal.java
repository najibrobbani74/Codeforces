import java.util.*;

import netscape.javascript.JSObject;

public class Tumbal {

    /**
     * @param args
     */
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int shopcount = scan.nextInt();
        List<Integer> shops = new ArrayList<Integer>();
        int[] a = new int[100000];
        int[] b = new int[100000];
        for (int i = 0; i < shopcount; i++) {
            int shop = scan.nextInt();
            if(!shops.contains(shop)){
                shops.add(shop);
            }
            a[shop]++;
        }
        b[0]=a[0];
        for (int i = 1; i < 100000; i++) {
            b[i] = a[i] + b[i-1];
        }
        
        int daycount = scan.nextInt();
        for (int i = 0; i < daycount; i++) {
            // while(daycount--){
                int day = scan.nextInt();
                if (day>100000) {
                    System.out.println(shopcount);
                } else {
                    System.out.println(b[day]);
                }
            // }
        }
    }
}
