function switch_plate_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[85.6123213,-58.7781041],[91.604389,-115.7888197]]).appendArc([92.5989109,-116.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([96.3485068,-116.6842912]).appendArc([97.3485068,-115.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([97.3485068,-109.7842912]).appendArc([97.8485068,-109.2842912],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([110.1985068,-109.2842912]).appendArc([110.6985068,-109.7842912],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([110.6985068,-115.6842912]).appendArc([111.6985068,-116.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([112.6483666,-116.6842912]).appendPoint([112.6483666,-96.6842912]).appendArc([113.6483666,-95.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([143.6483666,-95.6842912]).appendArc([144.6483666,-96.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([144.6483666,-115.6842912]).appendArc([145.6483666,-116.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([165.9503019,-116.6842912]).appendArc([166.175253,-116.7099211],{"radius":1,"clockwise":true,"large":false}).appendPoint([182.7155249,-120.5285438]).appendArc([182.9289449,-120.6041198],{"radius":1,"clockwise":true,"large":false}).appendPoint([199.7927104,-128.8291278]).appendArc([201.1298756,-128.3687049],{"radius":1,"clockwise":false,"large":false}).appendPoint([208.5821851,-113.089206]).appendArc([208.1217622,-111.7520408],{"radius":1,"clockwise":false,"large":false}).appendPoint([191.0558831,-103.4284556]).appendArc([191.0333384,-103.4178056],{"radius":1,"clockwise":false,"large":false}).appendPoint([189.0548272,-102.5131679]).appendArc([188.8639519,-102.4482418],{"radius":1,"clockwise":false,"large":false}).appendPoint([181.9234155,-100.8458928]).appendArc([181.1483666,-99.8715227],{"radius":1,"clockwise":true,"large":false}).appendPoint([181.1483666,-39.6842912]).appendArc([180.1483666,-38.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([176.4983666,-38.6842912]).appendArc([175.4983666,-39.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([175.4983666,-41.6842912]).appendArc([174.4983666,-42.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([169.7983666,-42.6842912]).appendArc([168.7983666,-41.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([168.7983666,-39.6842912]).appendArc([167.7983666,-38.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([146.1483667,-38.6842912]).appendArc([145.1483667,-37.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([145.1483667,-36.6842912]).appendArc([144.1483667,-35.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([126.1483667,-35.6842912]).appendArc([125.1483667,-36.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([125.1483667,-37.6842912]).appendArc([124.1483667,-38.6842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([103.85125,-38.6842912]).appendArc([102.85125,-39.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([102.85125,-41.2842912]).appendArc([101.85125,-42.2842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([95.15125,-42.2842912]).appendArc([94.15125,-41.2842912],{"radius":1,"clockwise":true,"large":false}).appendPoint([94.15125,-39.6842912]).appendArc([93.15125,-38.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([90.5101656,-38.6842912]).appendArc([89.510205,-39.6931671],{"radius":1,"clockwise":false,"large":false}).appendPoint([89.6588362,-56.4380059]).appendArc([88.7634041,-57.4414037],{"radius":1,"clockwise":true,"large":false}).appendPoint([86.5023147,-57.6790537]).appendArc([85.6123213,-58.7781041],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[94.6985068,-113.6842912],"radius":1.1})
.union(
    CAG.circle({"center":[135.1483667,-91.6842912],"radius":1.1})
).union(
    CAG.circle({"center":[178.1483666,-41.1842912],"radius":1.1})
).union(
    CAG.circle({"center":[92.50125,-44.6842912],"radius":1.1})
).union(
    new CSG.Path2D([[169.6610652,-114.948924],[181.3535059,-117.6483365]]).appendArc([182.5528271,-116.8989175],{"radius":1,"clockwise":false,"large":false}).appendPoint([185.2522396,-105.2064768]).appendArc([184.5028206,-104.0071556],{"radius":1,"clockwise":false,"large":false}).appendPoint([172.8103799,-101.3077431]).appendArc([171.6110587,-102.0571621],{"radius":1,"clockwise":false,"large":false}).appendPoint([168.9116462,-113.7496028]).appendArc([169.6610652,-114.948924],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[94.7645679,-107.588824],[106.6988306,-106.3344825]]).appendArc([107.588824,-105.2354321],{"radius":1,"clockwise":false,"large":false}).appendPoint([106.3344825,-93.3011694]).appendArc([105.2354321,-92.411176],{"radius":1,"clockwise":false,"large":false}).appendPoint([93.3011694,-93.6655175]).appendArc([92.411176,-94.7645679],{"radius":1,"clockwise":false,"large":false}).appendPoint([93.6655175,-106.6988306]).appendArc([94.7645679,-107.588824],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[92.987584,-90.6819518],[104.9218467,-89.4276103]]).appendArc([105.8118401,-88.3285599],{"radius":1,"clockwise":false,"large":false}).appendPoint([104.5574986,-76.3942972]).appendArc([103.4584482,-75.5043038],{"radius":1,"clockwise":false,"large":false}).appendPoint([91.5241855,-76.7586453]).appendArc([90.6341921,-77.8576957],{"radius":1,"clockwise":false,"large":false}).appendPoint([91.8885336,-89.7919584]).appendArc([92.987584,-90.6819518],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[91.2106001,-73.7750796],[103.1448628,-72.5207381]]).appendArc([104.0348562,-71.4216877],{"radius":1,"clockwise":false,"large":false}).appendPoint([102.7805147,-59.487425]).appendArc([101.6814643,-58.5974316],{"radius":1,"clockwise":false,"large":false}).appendPoint([89.7472016,-59.8517731]).appendArc([88.8572082,-60.9508235],{"radius":1,"clockwise":false,"large":false}).appendPoint([90.1115497,-72.8850862]).appendArc([91.2106001,-73.7750796],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[109.42588,-56.4994132],[121.4094344,-55.8713818]]).appendArc([122.3557279,-54.8204163],{"radius":1,"clockwise":false,"large":false}).appendPoint([121.7276965,-42.8368619]).appendArc([120.676731,-41.8905684],{"radius":1,"clockwise":false,"large":false}).appendPoint([108.6931766,-42.5185998]).appendArc([107.7468831,-43.5695653],{"radius":1,"clockwise":false,"large":false}).appendPoint([108.3749145,-55.5531197]).appendArc([109.42588,-56.4994132],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[111.2053026,-90.4528174],[123.188857,-89.824786]]).appendArc([124.1351505,-88.7738205],{"radius":1,"clockwise":false,"large":false}).appendPoint([123.5071191,-76.7902661]).appendArc([122.4561536,-75.8439726],{"radius":1,"clockwise":false,"large":false}).appendPoint([110.4725992,-76.472004]).appendArc([109.5263057,-77.5229695],{"radius":1,"clockwise":false,"large":false}).appendPoint([110.1543371,-89.5065239]).appendArc([111.2053026,-90.4528174],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[110.3155913,-73.4761153],[122.2991457,-72.8480839]]).appendArc([123.2454392,-71.7971184],{"radius":1,"clockwise":false,"large":false}).appendPoint([122.6174078,-59.813564]).appendArc([121.5664423,-58.8672705],{"radius":1,"clockwise":false,"large":false}).appendPoint([109.5828879,-59.4953019]).appendArc([108.6365944,-60.5462674],{"radius":1,"clockwise":false,"large":false}).appendPoint([109.2646258,-72.5298218]).appendArc([110.3155913,-73.4761153],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[151.1483666,-114.1842912],[163.1483666,-114.1842912]]).appendArc([164.1483666,-113.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([164.1483666,-101.1842912]).appendArc([163.1483666,-100.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([151.1483666,-100.1842912]).appendArc([150.1483666,-101.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([150.1483666,-113.1842912]).appendArc([151.1483666,-114.1842912],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[165.1483666,-60.1842911],[177.1483666,-60.1842911]]).appendArc([178.1483666,-59.1842911],{"radius":1,"clockwise":false,"large":false}).appendPoint([178.1483666,-47.1842911]).appendArc([177.1483666,-46.1842911],{"radius":1,"clockwise":false,"large":false}).appendPoint([165.1483666,-46.1842911]).appendArc([164.1483666,-47.1842911],{"radius":1,"clockwise":false,"large":false}).appendPoint([164.1483666,-59.1842911]).appendArc([165.1483666,-60.1842911],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[165.1483666,-77.1842911],[177.1483666,-77.1842911]]).appendArc([178.1483666,-76.1842911],{"radius":1,"clockwise":false,"large":false}).appendPoint([178.1483666,-64.1842911]).appendArc([177.1483666,-63.1842911],{"radius":1,"clockwise":false,"large":false}).appendPoint([165.1483666,-63.1842911]).appendArc([164.1483666,-64.1842911],{"radius":1,"clockwise":false,"large":false}).appendPoint([164.1483666,-76.1842911]).appendArc([165.1483666,-77.1842911],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[165.1483666,-94.1842911],[177.1483666,-94.1842911]]).appendArc([178.1483666,-93.1842911],{"radius":1,"clockwise":false,"large":false}).appendPoint([178.1483666,-81.1842911]).appendArc([177.1483666,-80.1842911],{"radius":1,"clockwise":false,"large":false}).appendPoint([165.1483666,-80.1842911]).appendArc([164.1483666,-81.1842911],{"radius":1,"clockwise":false,"large":false}).appendPoint([164.1483666,-93.1842911]).appendArc([165.1483666,-94.1842911],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[147.1483666,-58.1842912],[159.1483666,-58.1842912]]).appendArc([160.1483666,-57.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([160.1483666,-45.1842912]).appendArc([159.1483666,-44.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([147.1483666,-44.1842912]).appendArc([146.1483666,-45.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([146.1483666,-57.1842912]).appendArc([147.1483666,-58.1842912],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[147.1483666,-75.1842912],[159.1483666,-75.1842912]]).appendArc([160.1483666,-74.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([160.1483666,-62.1842912]).appendArc([159.1483666,-61.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([147.1483666,-61.1842912]).appendArc([146.1483666,-62.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([146.1483666,-74.1842912]).appendArc([147.1483666,-75.1842912],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[147.1483666,-92.1842912],[159.1483666,-92.1842912]]).appendArc([160.1483666,-91.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([160.1483666,-79.1842912]).appendArc([159.1483666,-78.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([147.1483666,-78.1842912]).appendArc([146.1483666,-79.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([146.1483666,-91.1842912]).appendArc([147.1483666,-92.1842912],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[129.1483667,-52.1842912],[141.1483667,-52.1842912]]).appendArc([142.1483667,-51.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.1483667,-39.1842912]).appendArc([141.1483667,-38.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([129.1483667,-38.1842912]).appendArc([128.1483667,-39.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([128.1483667,-51.1842912]).appendArc([129.1483667,-52.1842912],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[129.1483667,-69.1842912],[141.1483667,-69.1842912]]).appendArc([142.1483667,-68.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.1483667,-56.1842912]).appendArc([141.1483667,-55.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([129.1483667,-55.1842912]).appendArc([128.1483667,-56.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([128.1483667,-68.1842912]).appendArc([129.1483667,-69.1842912],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[129.1483667,-86.1842912],[141.1483667,-86.1842912]]).appendArc([142.1483667,-85.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.1483667,-73.1842912]).appendArc([141.1483667,-72.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([129.1483667,-72.1842912]).appendArc([128.1483667,-73.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([128.1483667,-85.1842912]).appendArc([129.1483667,-86.1842912],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[187.4067274,-120.0065754],[198.1922561,-125.2670293]]).appendArc([199.5294213,-124.8066064],{"radius":1,"clockwise":false,"large":false}).appendPoint([204.7898751,-114.0210777]).appendArc([204.3294522,-112.6839125],{"radius":1,"clockwise":false,"large":false}).appendPoint([193.5439235,-107.4234587]).appendArc([192.2067583,-107.8838816],{"radius":1,"clockwise":false,"large":false}).appendPoint([186.9463045,-118.6694103]).appendArc([187.4067274,-120.0065755],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.2] });
}




                function switch_plate_case_fn() {
                    

                // creating part 0 of case switch_plate
                let switch_plate__part_0 = switch_plate_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let switch_plate__part_0_bounds = switch_plate__part_0.getBounds();
                let switch_plate__part_0_x = switch_plate__part_0_bounds[0].x + (switch_plate__part_0_bounds[1].x - switch_plate__part_0_bounds[0].x) / 2
                let switch_plate__part_0_y = switch_plate__part_0_bounds[0].y + (switch_plate__part_0_bounds[1].y - switch_plate__part_0_bounds[0].y) / 2
                switch_plate__part_0 = translate([-switch_plate__part_0_x, -switch_plate__part_0_y, 0], switch_plate__part_0);
                switch_plate__part_0 = rotate([0,0,0], switch_plate__part_0);
                switch_plate__part_0 = translate([switch_plate__part_0_x, switch_plate__part_0_y, 0], switch_plate__part_0);

                switch_plate__part_0 = translate([0,0,5.4], switch_plate__part_0);
                let result = switch_plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return switch_plate_case_fn();
            }

        