function base_extrude_1_8_outline_fn(){
    return new CSG.Path2D([[85.6123213,-58.7781041],[91.604389,-115.7888197]]).appendArc([92.5989109,-116.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([165.9503019,-116.6842912]).appendArc([166.175253,-116.7099211],{"radius":1,"clockwise":true,"large":false}).appendPoint([182.7155249,-120.5285438]).appendArc([182.9289449,-120.6041198],{"radius":1,"clockwise":true,"large":false}).appendPoint([199.7927104,-128.8291278]).appendArc([201.1298756,-128.3687049],{"radius":1,"clockwise":false,"large":false}).appendPoint([208.5821851,-113.089206]).appendArc([208.1217622,-111.7520408],{"radius":1,"clockwise":false,"large":false}).appendPoint([203.6099955,-109.5515052]).appendArc([203.0483666,-108.6527112],{"radius":1,"clockwise":true,"large":false}).appendPoint([203.0483666,-56.6842911]).appendArc([202.0483666,-55.6842911],{"radius":1,"clockwise":false,"large":false}).appendPoint([182.1483666,-55.6842911]).appendArc([181.1483666,-54.6842911],{"radius":1,"clockwise":true,"large":false}).appendPoint([181.1483666,-39.6842912]).appendArc([180.1483666,-38.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([146.1483667,-38.6842912]).appendArc([145.1483667,-37.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([145.1483667,-36.6842912]).appendArc([144.1483667,-35.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([126.1483667,-35.6842912]).appendArc([125.1483667,-36.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([125.1483667,-37.6842912]).appendArc([124.1483667,-38.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([90.5101656,-38.6842912]).appendArc([89.510205,-39.6931671],{"radius":1,"clockwise":false,"large":false}).appendPoint([89.6588362,-56.4380059]).appendArc([88.7634041,-57.4414037],{"radius":1,"clockwise":true,"large":false}).appendPoint([86.5023147,-57.6790537]).appendArc([85.6123213,-58.7781041],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[94.6985068,-113.6842912],"radius":1.1})
.union(
    CAG.circle({"center":[199.5280893,-101.9976169],"radius":1.1})
).union(
    CAG.circle({"center":[135.1483667,-91.6842912],"radius":1.1})
).union(
    CAG.circle({"center":[178.1483666,-41.1842912],"radius":1.1})
).union(
    CAG.circle({"center":[92.50125,-44.6842912],"radius":1.1})
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

        