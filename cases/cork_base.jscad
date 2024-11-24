function base_extrude_1_8_outline_fn(){
    return new CSG.Path2D([[85.6123213,-58.7781041],[90.1483667,-101.9356931]]).appendPoint([90.1483667,-103.1842912]).appendArc([90.3417197,-103.7753248],{"radius":1,"clockwise":false,"large":false}).appendPoint([91.604389,-115.7888197]).appendArc([92.5989109,-116.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([165.9503019,-116.6842912]).appendArc([166.175253,-116.7099211],{"radius":1,"clockwise":true,"large":false}).appendPoint([182.7155249,-120.5285438]).appendArc([182.9289449,-120.6041198],{"radius":1,"clockwise":true,"large":false}).appendPoint([199.7927104,-128.8291278]).appendArc([201.1298756,-128.3687049],{"radius":1,"clockwise":false,"large":false}).appendPoint([208.5821851,-113.089206]).appendArc([208.1217622,-111.7520408],{"radius":1,"clockwise":false,"large":false}).appendPoint([202.4483666,-108.984941]).appendPoint([202.4483666,-58.6842911]).appendArc([201.4483666,-57.6842911],{"radius":1,"clockwise":false,"large":false}).appendPoint([184.1483667,-57.6842911]).appendPoint([184.1483667,-40.1842912]).appendArc([183.1483667,-39.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([145.1483667,-39.1842912]).appendPoint([145.1483667,-36.6842912]).appendArc([144.1483667,-35.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([126.1483667,-35.6842912]).appendArc([125.1483667,-36.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([125.1483667,-39.152789]).appendPoint([124.547268,-39.1842912]).appendPoint([91.1483667,-39.1842912]).appendArc([90.1483667,-40.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([90.1483667,-57.2958382]).appendPoint([86.5023147,-57.6790537]).appendArc([85.6123213,-58.7781041],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[94.3972168,-113.6604839],"radius":1.8})
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

        