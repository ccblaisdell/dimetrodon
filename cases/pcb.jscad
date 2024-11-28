function left_board_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[86.6068432,-58.6735757],[89.272319,-84.033884]]).appendPoint([92.0961567,-115.6842912]).appendPoint([113.1483666,-115.6842912]).appendPoint([113.1483666,-95.6842912]).appendArc([114.1483666,-94.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([144.1483666,-94.6842912]).appendArc([145.1483666,-95.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([145.1483666,-115.6842912]).appendPoint([166.1483666,-115.6842912]).appendPoint([184.0527886,-120.0396531]).appendPoint([200.2310815,-127.9303337]).appendPoint([207.683391,-112.6508349]).appendPoint([202.4483666,-110.0975429]).appendPoint([202.4483666,-57.6842911]).appendPoint([180.6483666,-57.6842911]).appendPoint([180.6483666,-39.6842912]).appendPoint([144.1483666,-39.6842912]).appendPoint([144.1483667,-36.6842912]).appendPoint([126.1483667,-36.6842912]).appendPoint([126.1483667,-39.6842912]).appendPoint([90.3796813,-39.6842912]).appendPoint([90.5826936,-58.255697]).appendPoint([86.6068432,-58.6735757]).close().innerToCAG()
.subtract(
    CAG.circle({"center":[95.0961567,-112.6842912],"radius":1.1})
.union(
    CAG.circle({"center":[199.3983666,-103.6842911],"radius":1.1})
).union(
    CAG.circle({"center":[135.1483667,-90.6842912],"radius":1.1})
).union(
    CAG.circle({"center":[177.6483666,-42.6842912],"radius":1.1})
).union(
    CAG.circle({"center":[93.3796813,-45.6842912],"radius":1.1})
)).extrude({ offset: [0, 0, 1.6] });
}




                function pcb_case_fn() {
                    

                // creating part 0 of case pcb
                let pcb__part_0 = left_board_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let pcb__part_0_bounds = pcb__part_0.getBounds();
                let pcb__part_0_x = pcb__part_0_bounds[0].x + (pcb__part_0_bounds[1].x - pcb__part_0_bounds[0].x) / 2
                let pcb__part_0_y = pcb__part_0_bounds[0].y + (pcb__part_0_bounds[1].y - pcb__part_0_bounds[0].y) / 2
                pcb__part_0 = translate([-pcb__part_0_x, -pcb__part_0_y, 0], pcb__part_0);
                pcb__part_0 = rotate([0,0,0], pcb__part_0);
                pcb__part_0 = translate([pcb__part_0_x, pcb__part_0_y, 0], pcb__part_0);

                pcb__part_0 = translate([0,0,2.8], pcb__part_0);
                let result = pcb__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return pcb_case_fn();
            }

        