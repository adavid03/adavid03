years = 1:13;
population = [34,40,46,51,55,58,60,62,63,63,64,64,64];

plot(years, population, '.r', 'MarkerSize', 20); hold on

r = 0.40490;
K = 64.81798;
f = @(t,N) r*N*(1 - N/K);

[t,N] = ode45(f, [1 13], 34);

plot(t, N, 'b-');
xlabel('Year'); ylabel('Population');
legend('Data', 'Model');
title('Population vs Time');
hold off

model_values = interp1(t, N, years);

error = sum((population - model_values).^2);
disp(['Squared error = ', num2str(error)]);
