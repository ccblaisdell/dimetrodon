function left_board_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[85.5077928,-57.7835822],[91.6985068,-116.6842912]]).appendPoint([112.6483666,-116.6842912]).appendPoint([112.6483666,-96.6842912]).appendArc([113.6483666,-95.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([143.6483666,-95.6842912]).appendArc([144.6483666,-96.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([144.6483666,-116.6842912]).appendPoint([166.0642377,-116.6842912]).appendPoint([182.8265399,-120.5541736]).appendPoint([200.6915044,-129.2674989]).appendPoint([209.0205562,-112.190412]).appendPoint([203.0483666,-109.2775805]).appendPoint([203.0483666,-56.6842911]).appendPoint([181.1483666,-56.6842911]).appendPoint([181.1483666,-38.6842912]).appendPoint([145.1483667,-38.6842912]).appendPoint([145.1483667,-35.6842912]).appendPoint([125.1483667,-35.6842912]).appendPoint([125.1483667,-38.6842912]).appendPoint([89.50125,-38.6842912]).appendPoint([89.6668997,-57.3464425]).appendPoint([85.5077928,-57.7835822]).close().innerToCAG()
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

        