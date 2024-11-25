function base_extrude_1_8_outline_fn(){
    return new CSG.Path2D([[85.3375588,-58.5556058],[89.7367747,-100.411349]]).appendPoint([91.1141023,-115.7735897]).appendArc([92.1101072,-116.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([165.9503019,-116.6842912]).appendArc([166.175253,-116.7099211],{"radius":1,"clockwise":true,"large":false}).appendPoint([182.7155249,-120.5285438]).appendArc([182.9289449,-120.6041198],{"radius":1,"clockwise":true,"large":false}).appendPoint([199.7927104,-128.8291278]).appendArc([201.1298756,-128.3687049],{"radius":1,"clockwise":false,"large":false}).appendPoint([208.5821851,-113.089206]).appendArc([208.1217622,-111.7520408],{"radius":1,"clockwise":false,"large":false}).appendPoint([202.9483666,-109.2288073]).appendPoint([202.9483666,-57.6842911]).appendArc([202.4483666,-57.1842911],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([184.1483667,-57.1842911]).appendPoint([184.1483667,-40.1842912]).appendArc([183.1483667,-39.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([145.3983667,-39.1842912]).appendPoint([145.3983667,-36.4342912]).appendArc([144.3983667,-35.4342912],{"radius":1,"clockwise":false,"large":false}).appendPoint([125.8983667,-35.4342912]).appendArc([124.8983667,-36.4342912],{"radius":1,"clockwise":false,"large":false}).appendPoint([124.8983667,-39.1658909]).appendPoint([124.5472684,-39.1842912]).appendPoint([124.4456168,-39.1842912]).appendArc([123.7783532,-38.9742453],{"radius":1,"clockwise":false,"large":false}).appendPoint([119.7704378,-39.1842912]).appendPoint([91.1483667,-39.1842912]).appendArc([90.1483667,-40.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([90.1483667,-57.0444612]).appendPoint([86.2275522,-57.4565554]).appendArc([85.3375588,-58.5556058],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[94.3449525,-113.1632229],"radius":1.8})
.union(
    CAG.circle({"center":[198.6292952,-101.5592457],"radius":1.8})
).union(
    CAG.circle({"center":[135.1483667,-91.6842912],"radius":1.8})
).union(
    CAG.circle({"center":[181.1483666,-42.6842911],"radius":1.8})
).union(
    CAG.circle({"center":[94.2509345,-45.3012958],"radius":1.8})
)).extrude({ offset: [0, 0, 1.8] });
}




                function cork_base_case_fn() {
                    

                // creating part 0 of case cork_base
                let cork_base__part_0 = base_extrude_1_8_outline_fn();

                // make sure that rotations are relative
                let cork_base__part_0_bounds = cork_base__part_0.getBounds();
                let cork_base__part_0_x = cork_base__part_0_bounds[0].x + (cork_base__part_0_bounds[1].x - cork_base__part_0_bounds[0].x) / 2
                let cork_base__part_0_y = cork_base__part_0_bounds[0].y + (cork_base__part_0_bounds[1].y - cork_base__part_0_bounds[0].y) / 2
                cork_base__part_0 = translate([-cork_base__part_0_x, -cork_base__part_0_y, 0], cork_base__part_0);
                cork_base__part_0 = rotate([0,0,0], cork_base__part_0);
                cork_base__part_0 = translate([cork_base__part_0_x, cork_base__part_0_y, 0], cork_base__part_0);

                cork_base__part_0 = translate([0,0,1], cork_base__part_0);
                let result = cork_base__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return cork_base_case_fn();
            }

        