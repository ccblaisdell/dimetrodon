function base_extrude_1_outline_fn(){
    return new CSG.Path2D([[86.6068432,-58.6735757],[92.5989109,-115.6842912]]).appendPoint([166.1483666,-115.6842912]).appendPoint([184.0527886,-120.0396531]).appendPoint([200.2310815,-127.9303337]).appendPoint([207.683391,-112.6508349]).appendPoint([202.4483666,-110.0975429]).appendPoint([202.4483666,-56.6842911]).appendPoint([180.1483666,-56.6842911]).appendPoint([180.1483666,-39.6842912]).appendPoint([144.1483666,-39.6842912]).appendPoint([144.1483667,-36.6842912]).appendPoint([126.1483667,-36.6842912]).appendPoint([126.1483667,-39.6842912]).appendPoint([90.3796813,-39.6842912]).appendPoint([90.5826936,-58.255697]).appendPoint([86.6068432,-58.6735757]).close().innerToCAG()
.subtract(
    CAG.circle({"center":[95.5989109,-112.6842912],"radius":1.1})
.union(
    CAG.circle({"center":[199.0897181,-102.8964109],"radius":1.1})
).union(
    CAG.circle({"center":[135.1483667,-90.6842912],"radius":1.1})
).union(
    CAG.circle({"center":[177.1483666,-42.1842912],"radius":1.1})
).union(
    CAG.circle({"center":[93.3796813,-45.6842912],"radius":1.1})
)).extrude({ offset: [0, 0, 1] });
}




                function silicone_base_case_fn() {
                    

                // creating part 0 of case silicone_base
                let silicone_base__part_0 = base_extrude_1_outline_fn();

                // make sure that rotations are relative
                let silicone_base__part_0_bounds = silicone_base__part_0.getBounds();
                let silicone_base__part_0_x = silicone_base__part_0_bounds[0].x + (silicone_base__part_0_bounds[1].x - silicone_base__part_0_bounds[0].x) / 2
                let silicone_base__part_0_y = silicone_base__part_0_bounds[0].y + (silicone_base__part_0_bounds[1].y - silicone_base__part_0_bounds[0].y) / 2
                silicone_base__part_0 = translate([-silicone_base__part_0_x, -silicone_base__part_0_y, 0], silicone_base__part_0);
                silicone_base__part_0 = rotate([0,0,0], silicone_base__part_0);
                silicone_base__part_0 = translate([silicone_base__part_0_x, silicone_base__part_0_y, 0], silicone_base__part_0);

                silicone_base__part_0 = translate([0,0,0], silicone_base__part_0);
                let result = silicone_base__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return silicone_base_case_fn();
            }

        