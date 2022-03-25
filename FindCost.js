const getCost = (Cost, Width, Height) => {
    return "Tổng chi phí $" + Cost * Width * Height + " cho " + Width * Height + "m mặt bằng" ;
};
var Cost = prompt('Nhập Cost = ');
var Width = prompt('Nhập Width = ')
var Height = prompt('Nhập Height = ')
document.write(getCost(Cost, Width, Height))