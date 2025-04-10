import numpy as np
from scipy.integrate import solve_ivp
from scipy.optimize import minimize

years = np.arange(1, 14)
population = np.array([34,40,46,51,55,58,60,62,63,63,64,64,64])

def logistic(t, N, r, K):
    return r * N * (1 - N / K)

def compute_error(params):
    r, K = params
    sol = solve_ivp(lambda t, N: logistic(t, N, r, K), [1, 13], [34], t_eval=years)
    model = sol.y[0]
    return np.sum((population - model) ** 2)

res = minimize(compute_error, [0.4, 64])
r_opt, K_opt = res.x

print(f"Best r = {r_opt:.5f}")
print(f"Best K = {K_opt:.5f}")
print(f"Squared error = {res.fun:.5f}")
