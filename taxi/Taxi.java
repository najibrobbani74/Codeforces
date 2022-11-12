package taxi;

import java.util.*;

public class Taxi {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int group = scanner.nextInt();
        List<Integer> belumPenuh = new ArrayList<Integer>();
        int result = 0;
        for (int i = 0; i < group; i++) {
            int people = scanner.nextInt();
            belumPenuh.add(people);
        }
        Collections.sort(belumPenuh);
        Collections.reverse(belumPenuh);
        while (belumPenuh.size() > 1) {
            if ((belumPenuh.get(0)+belumPenuh.get(belumPenuh.size()-1)) <= 4) {
                belumPenuh.set(0,belumPenuh.get(0)+belumPenuh.get(belumPenuh.size()-1) );
                belumPenuh.remove(belumPenuh.size()-1);
            } else {
                belumPenuh.remove(0);
                result++;
            }
        }
        System.out.println(result+belumPenuh.size());
        scanner.close();
    }
}
