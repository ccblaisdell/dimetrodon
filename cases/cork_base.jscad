function base_extrude_1_8_outline_fn(){
    return new CSG.Path2D([[-14.6624412,41.4443942],[-10.2632253,-0.411349]]).appendPoint([-8.8858977,-15.7735897]).appendArc([-7.8898928,-16.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([65.9503019,-16.6842912]).appendArc([66.175253,-16.7099211],{"radius":1,"clockwise":true,"large":false}).appendPoint([82.7155249,-20.5285438]).appendArc([82.9289449,-20.6041198],{"radius":1,"clockwise":true,"large":false}).appendPoint([99.7927104,-28.8291278]).appendArc([101.1298756,-28.3687049],{"radius":1,"clockwise":false,"large":false}).appendPoint([108.5821851,-13.089206]).appendArc([108.1217622,-11.7520408],{"radius":1,"clockwise":false,"large":false}).appendPoint([102.9483666,-9.2288073]).appendPoint([102.9483666,42.3157089]).appendArc([102.4483666,42.8157089],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([84.1483667,42.8157089]).appendPoint([84.1483667,60.3157088]).appendArc([83.1483667,61.3157088],{"radius":1,"clockwise":false,"large":false}).appendPoint([45.3983667,61.3157088]).appendPoint([45.3983667,63.5657088]).appendArc([44.3983667,64.5657088],{"radius":1,"clockwise":false,"large":false}).appendPoint([25.8983667,64.5657088]).appendArc([24.8983667,63.5657088],{"radius":1,"clockwise":false,"large":false}).appendPoint([24.8983667,61.3157088]).appendPoint([-8.8531329,61.3157088]).appendArc([-9.8531318,60.3172095],{"radius":1,"clockwise":false,"large":false}).appendPoint([-9.8791909,42.9526424]).appendPoint([-13.7724478,42.5434446]).appendArc([-14.6624412,41.4443942],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.8] });
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

        