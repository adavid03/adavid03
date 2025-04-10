function dirfield7(f,t,y,type,param)
%
% dirfield7 plots the direction field for the scalar ODE y'=f(t,y)
%   in domain specified by window using a grid of arrows or lines
%   by default the grid is 21 x 21
%   use: 
%     dirfield7(@f,[-10,10],[-10,10],'arrow') 
%     dirfield7(@f,-10:.5:10,-10:.5:10,'line')
%   A parameter in f is passed as the optional last argument 
%  
if length(t)==2, t = linspace(t(1),t(2),21); end
if length(y)==2, y = linspace(y(1),y(2),21); end
dt = t(2)-t(1); dy = y(2)-y(1);
[T,Y] = meshgrid(t,y);
T = T+100*eps*rand(size(T)); % to avoid divisions by zero or indeterminate slope
Y = Y+100*eps*rand(size(Y)); % eps is machine round-off
if nargin<5, 
    S = f(T,Y);
else
    S = f(T,Y,param);
end
DT = ones(size(T));
DY = S;
switch type
case 'arrow'; quiver(T,Y,DT,DY);
case 'line'; 
    N = sqrt(DT.^2+DY.^2); DT = DT./N; DY = DY./N;  %This line added in to normalize
    quiver(T,Y,DT,DY,'.');
case 'arrow_scaled'; 
    N = sqrt(DT.^2+DY.^2); DT = DT./N; DY = DY./N;
    quiver(T,Y,DT,DY);
case 'line_scaled'; 
    N = sqrt(DT.^2+DY.^2); DT = DT./N; DY = DY./N;
    quiver(T,Y,DT,DY,'.');
otherwise; disp('type not implemented');
end
axis([t(1) t(end) y(1) y(end)]);
grid on;