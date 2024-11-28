function base_extrude_1_outline_fn(){
    return new CSG.Path2D([[85.2330303,-57.5610839],[89.7367747,-100.4113489]]).appendPoint([91.1957527,-116.6842912]).appendPoint([166.0642377,-116.6842912]).appendPoint([182.8265399,-120.5541736]).appendPoint([200.6915044,-129.2674989]).appendPoint([209.0205562,-112.190412]).appendPoint([202.4483666,-108.984941]).appendPoint([202.4483666,-57.6842911]).appendPoint([181.3983666,-57.6842911]).appendPoint([181.3983666,-44.4668454]).appendArc([181.1483666,-40.8842911],{"radius":1.8,"clockwise":true,"large":true}).appendPoint([181.1483666,-38.6842912]).appendPoint([145.3983667,-38.6842912]).appendPoint([145.3983667,-35.4342912]).appendPoint([124.8983667,-35.4342912]).appendPoint([124.8983667,-38.6842912]).appendPoint([89.50125,-38.6842912]).appendPoint([89.6646705,-57.0952997]).appendPoint([85.2330303,-57.5610839]).close().innerToCAG()
.subtract(
    CAG.circle({"center":[94.3449525,-113.1632229],"radius":1.8})
.union(
    CAG.circle({"center":[198.6292952,-101.5592457],"radius":1.8})
).union(
    CAG.circle({"center":[135.1483667,-91.6842912],"radius":1.8})
).union(
    CAG.circle({"center":[97.5480855,-47.9712761],"radius":1.8})
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

        